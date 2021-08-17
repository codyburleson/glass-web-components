import { newSpecPage } from '@stencil/core/testing';
import { GlassMenu } from '../glass-menu';

describe('glass-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GlassMenu],
      html: `<glass-menu></glass-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <glass-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </glass-menu>
    `);
  });
});
