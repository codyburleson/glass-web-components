import { newE2EPage } from '@stencil/core/testing';

describe('glass-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<glass-menu></glass-menu>');

    const element = await page.find('glass-menu');
    expect(element).toHaveClass('hydrated');
  });
});
