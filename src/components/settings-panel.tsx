'use client';

import { ArrowToRight, Number1, Number2, Number3 } from '@/components-ui/icons';
import Accordian from '@/components/accordian';
import { Button } from './button/button';
import { useState } from 'react';
import { Modal } from './modal';
import { PrimaryButton } from './button/primary-button';
import { ProductModal } from './product-modal';
import { products } from './constants/products';



// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function SettingsPanel() {
  const [modalOpen, setModalopen] = useState(false);

  const handleClick = () => {
    console.log('clicked');
    setModalopen(true);
  };

  const [selectedProduct, setSelectedProduct] = useState<any | null>(
    products[0]
  );

  const onProductSelect = (product: any | null) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className="flex flex-col h-fit gap-5 ">
        <Button onClick={handleClick}>
          <div className="flex flex-row h-fit w-[100%] rounded-lg border border-gray-3 px-[20px] py-4 justify-between">
            <div className="flex">
              <div className='w-[45px] h-[45px] flex flex-shrink-0 items-center'>
                <img src={selectedProduct.thumbnail} alt="bowl img" />
              </div>
              <div className="pl-3 flex flex-col">
                <div className="text-base font-bold flex items-start">{selectedProduct.displayName}</div>
                <div className="text-base text-gray-6 items-start flex ">
                {selectedProduct.category}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ArrowToRight />
            </div>
          </div>
        </Button>
        <ProductModal
          isOpen={modalOpen}
          closeModal={() => setModalopen(false)}
          selectedProduct={selectedProduct}
          onProductSelect= {onProductSelect}
        />

        <Accordian
          tooltip={true}
          showOptions={false}
          heading={'Brand Description'}
          NumberIcon={Number1}
          description="Your gateway to brand brilliance – click to discover the essence of your brand's identity and message"
          inputPlaceholder="Brand Description"
        />
        <Accordian
          tooltip={true}
          showOptions={false}
          heading={'Product Description'}
          NumberIcon={Number2}
          description="Unlock the magic of our product – click here to delve into its features, benefits, and why it's a must-have for you"
          inputPlaceholder="Product Description"
        />
        <Accordian
          tooltip={true}
          showOptions={true}
          heading={'Topic'}
          NumberIcon={Number3}
          description="Dive deeper into this topic – click here to explore the ins and outs, gain insights, and stay informed"
          inputPlaceholder="topic"
        />
      </div>
    </>
  );
}
