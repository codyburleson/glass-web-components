import { Component, Event, EventEmitter, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'glass-menu',
    styleUrl: 'glass-menu.css',
    shadow: true,
})
export class GlassMenu {

    private _dataArray: any[];
    @Prop() dataArray: any[] | string;
    @Prop() defaultThumbnailSrc: string;
    @Prop() ruled: boolean;

    // Components can emit data and events using the Event Emitter decorator.
    // Event called 'todoCompleted' that is "composed", "cancellable" and it will bubble up!
    // See: https://stenciljs.com/docs/events
    @Event({
        eventName: 'menuItemClicked', // A string custom event name to override the default.
        composed: true, // A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.
        cancelable: true, // A Boolean indicating whether the event is cancelable.  
        bubbles: true, // A Boolean indicating whether the event bubbles up through the DOM or not.
    }) menuItemClicked: EventEmitter<any>;

    menuItemClickedHandler(item: any) {
        // console.log('>> menuItemClickedHandler()');
        
        this.menuItemClicked.emit(item);
        // and you can have reference to the custom event, like this:
        // const event = this.menuItemClicked.emit(item);

        //if(!event.defaultPrevented) {
            // if not prevented, do some default handling code
            //console.log('-- menuItemClickedHandler() > menuItemClicked event fired with item: %o', item)
        //}
        // Maybe...
        // return true;
    }

    @Watch('dataArray')
    arrayDataWatcher(newValue: any[] | string) {
        // console.log('>> glass-menu.arrayDataWatcher()')
        if (typeof newValue === 'string') {
            this._dataArray = JSON.parse(newValue);
        }
        else {
            this._dataArray = newValue;
        }
    }

    componentWillLoad() {
        this.arrayDataWatcher(this.dataArray);
    }

    renderImage(item) {
        if(item.thumbnail) {
            //return ( <div class="mImage"><glass-img src={item.thumbnail} alt={item.title}></glass-img></div> );
            return ( <div class="imageContainer"><img src={item.thumbnail} alt={item.title} class="thumbnail"/></div> );
        } else {
            if(this.defaultThumbnailSrc) {
                //return ( <div class="mImage"><glass-img src={this.defaultThumbnailSrc} alt={item.title}></glass-img></div> )
                return ( <div class="imageContainer"><img src={this.defaultThumbnailSrc} alt={item.title} class="thumbnail"/></div> )
            }
        }
    }

    formatDate(item) {
        return new Date(item.created).toLocaleDateString("en-US", {
            //weekday: "short",
            year: "numeric",
            month:"short",
            day:"numeric"});
    }

    // Modified copy of same function from lib/document-utils.js in rockmountain project...
    getDocumentPath(doc) {
        if (doc.path) {
            if (doc.path.length === 0) {
                // path is empty, so document is a root doc with no parent
                return '/' + doc._id
            } else {
                return '/' + doc.path.join("/") + "/" + doc._id
            }
        } else if (doc.src) {
            return doc.src
        } else {
            console.warn('>> glass-menu > item with id, "' + doc._id + '", must have either .path or .src attribute; it has neither.')
        }
    }

    render() {
        return (
            <Host>
                {/* <slot></slot> */}
                {/* <div class='array-size'>{this._dataArray.length}</div> */}
                <ul>
                {this._dataArray.map(x =>
                    <li class={this.ruled ? 'ruled' : ''}>
                       <a onClick={() => this.menuItemClickedHandler(x)} href={this.getDocumentPath(x)}>
                            <div class="itemContainer">
                                {this.renderImage(x)}
                                <div class="textContainer">
                                    <h2>{x.title}</h2>
                                    <p class="description">{x.description}</p>
                                    <p><small>{this.formatDate(x)}</small></p>
                                </div>
                            </div>
                        </a>
                    </li>
                )}
                </ul>
            </Host>
        );
    }

}
