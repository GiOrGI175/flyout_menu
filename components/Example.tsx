'use client';

import FlyoutLink from './FlyoutLink';
import PricingContent from './PricingContent';

export default function Example() {
  return (
    <div className='flex h-screen justify-center bg-neutral-900 px-3 py-12'>
      <div className='flex gap-5'>
        <FlyoutLink href='#' FlyoutContent={<PricingContent />}>
          Pricing
        </FlyoutLink>

        <FlyoutLink href='#' FlyoutContent={<PricingContent />}>
          Pricing
        </FlyoutLink>

        <FlyoutLink href='#' FlyoutContent={<PricingContent />}>
          Pricing
        </FlyoutLink>
      </div>
    </div>
  );
}
