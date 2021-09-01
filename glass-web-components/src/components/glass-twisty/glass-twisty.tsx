import { Component, Element, h, Prop, Method, State } from '@stencil/core';

@Component({
    tag: 'glass-twisty',
    styleUrl: 'glass-twisty.css',
    shadow: true
})
export class GlassTwisty {

    @Element() el: HTMLElement;

    //@Prop({ attribute: 'document' }) doc!: Document;

    // internalState is not just used because props are immutable; props can be declared
    // immutable and then changed from within the component. A secondary, internalState
    // is used instead of the opened prop because its value is used as a CSS class name.
    @State() internalState: string = 'closed';

    /**
     * Label for the twisty header; defaults to `"More..."`
     */
    @Prop() label: string = 'More...';

    /**
     * Color to for the twisty header text
     */
    @Prop() labelColor: string;

    /**
     * Color to for the twisty content text
     */
    @Prop() textColor: string;

    /**
     * When `true`, the twisty state will be opened by default.
     */
    @Prop() opened: boolean;

    /** Allows the twisty header text to be a hyperlink */
    @Prop() href: string = "#";

    /** The target of the link when the href attribute is used. One of _blank, _self, _top, _parent; default is _self */
    @Prop() target: string = "_self";

    componentWillLoad() {
        if (this.opened) {
            // If user defined a state, use it for the internalState
            this.internalState = "opened";
        }

        // If the web page has no CSS reset applied (such as what is included in Bootstrap CSS),
        // the component will not render as it should because it relies on some global resetting.
        // Therefore, we will get the stylesheets applied to to page and inject the relevant resets,
        // See: https://davidwalsh.name/add-rules-stylesheets
        // const styleSheets: StyleSheetList = this.doc.styleSheets;
        const styleSheets: StyleSheetList = this.el.ownerDocument.styleSheets;

        // Grab the last stylesheet regardless of media
        const targetStyleSheet = styleSheets[styleSheets.length - 1];

        // Apply the reset rules that are relevant to this component
        this.addGlobalCSSRule(targetStyleSheet, 'p', 'margin-top:0');

    }

    addGlobalCSSRule(sheet, selector, rules) {
        if ("insertRule" in sheet) {
            sheet.insertRule(selector + "{" + rules + "}");
        }
        else if ("addRule" in sheet) {
            sheet.addRule(selector, rules);
        }
    }

    /**
     * Get the current  state (`"opened"` or `"closed"`)
     */
    @Method()
    async getState() {
        return this.internalState;
    }

    /**
     * Open (expand) the twisty.
     */
    @Method()
    async open() {
        this.internalState = 'opened';
    }

    /**
     * Close (collapse) the twisty.
     */
    @Method()
    async close() {
        this.internalState = 'closed';
    }

    handleLabelClick(event) {
        // console.log('>> handleLabelClick(): ' + event);
        if (this.href !== "#") {
            event.stopPropagation();
        }
    }

    renderLabel() {

        if (this.labelColor) {
            if (this.href == "#") {
                return (<div class="title" style={{ "color": this.labelColor }}>{this.label}</div>);
            } else {
                return (<div class="title" style={{ "color": this.labelColor }}><a href={this.href} target={this.target} onClick={(event) => this.handleLabelClick(event)}>{this.label}</a></div>)
            }
        } else {
            if (this.href == "#") {
                return (<div class="title">{this.label}</div>);
            } else {
                return (<div class="title"><a href={this.href} target={this.target} onClick={(event) => this.handleLabelClick(event)}>{this.label}</a></div>)
            }
        }

    }

    renderContent() {
        if (this.textColor) {
            return <div class="content" style={{ "color": this.textColor }}><slot /></div>
        } else {
            return <div class="content"><slot /></div>
        }
    }

    render() {
        let wrapperClass = 'wrapper';
        if (this.internalState == 'opened') {
            wrapperClass += ' item--active';
        }

        return (
            <div class={wrapperClass}>
                <button class="heading" aria-expanded="false" aria-controls="pane1" onClick={() => this.toggle()}>
                    <svg class="arrow" width="7" height="12" viewBox="0 0 7 12">
                        <path fill-rule="nonzero" d="M5.569 5.994L0 .726.687 0l6.336 5.994-6.335 6.002L0 11.27z" />
                    </svg>
                    {this.renderLabel()}
                </button>
                {this.renderContent()}
            </div>
        );
    }

    toggle() {
        const wrapper = this.el.shadowRoot.querySelector('.wrapper');
        const heading = wrapper.querySelector('.heading');
        const expanded = heading.getAttribute('aria-expanded');
        if (expanded !== null) {
            heading.setAttribute('aria-expanded', expanded === 'true' ? 'false' : 'true');
        }
        wrapper.classList.toggle('item--active');
        if (this.internalState === 'opened') {
            this.internalState = 'closed';
        } else {
            this.internalState = 'opened';
        }
    }

}
