"use client";

import { ArrowToRight, Number1, Number2, Number3 } from "@/components-ui/icons";
import Accordian from "@/components/accordian";
import { Button } from "./button/button";
import { useState } from "react";
import { Modal } from "./modal";
import { PrimaryButton } from "./button/primary-button";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function SettingsPanel() {
  const [modalOpen, setModalopen] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setModalopen(true);
  };

  return (
    <>
      <div className="flex flex-col h-fit gap-5 ">
        <Button onClick={handleClick}>
          <div className="flex flex-row h-fit w-[100%] rounded-lg border border-gray-3 px-[20px] py-4 justify-between">
            <div className="flex">
              <div><img src="assets/chicken-bowl.png" alt="bowl img" /></div>
              <div className="pl-3 flex flex-col">
                <div className="text-base font-bold">Chicken Bowl</div>
                <div className="text-base text-gray-6 items-start flex ">
                  Meals
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ArrowToRight />
            </div>
          </div>
        </Button>
        <Modal
          isOpen={modalOpen}
          onCloseButtonClick={() => setModalopen(false)}
        >
          <div className="w-[480px] min-h-[570px] px-10 py-8 space-y-3 overflow-y-hidden">
        <div className="text-center space-y-1">
          <div className="text-lg font-bold">Choose a product</div>
          <div className="text-gray-7">
            Choose an existing product from your asset library
            <br />
            {!isSaveAssetModal
              ? 'to pre-fill your product description.'
              : 'to save your assets.'}
          </div>
        </div>
        <div className="w-[292px] m-auto pt-2 space-y-4">
          <div className="space-y-5">
            <Input
              withSearchIcon={true}
              placeholder="Search"
              onChange={(e) => handleAssetSearch(e.target.value)}
            />
            <div className="h-[282px] bg-white border border-gray-3 rounded-lg p-6 space-y-3 overflow-y-scroll">
              {isProductLoading ? (
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Spinner />
                </div>
              ) : noProductResult ? (
                'No Product found.'
              ) : (
                <>
                  <ProductOptions
                    items={products}
                    onProductChosen={setChosenProduct}
                    chosenProduct={chosenProduct}
                  />
                  {hasNextProductPage && (
                    <Waypoint
                      onEnter={() => {
                        if (hasNextProductPage) {
                          fetchNextProductPage();
                        }
                      }}
                    >
                      <div className="w-full flex flex-col justify-center items-center">
                        <Spinner />
                      </div>
                    </Waypoint>
                  )}
                </>
              )}
            </div>
          </div>
          <PrimaryButton
            label="Select"
            size={ButtonSize.BASE_FULL}
            isDisabled={!chosenProduct}
            onClick={onSelectButtonClick}
          />
        </div>
      </div>
        </Modal>
        <Accordian
          tooltip={true}
          showOptions={false}
          heading={"Brand Description"}
          NumberIcon={Number1}
          description="Your gateway to brand brilliance – click to discover the essence of your brand's identity and message"
          inputPlaceholder="Brand Description"
        />
        <Accordian
          tooltip={true}
          showOptions={false}
          heading={"Product Description"}
          NumberIcon={Number2}
          description="Unlock the magic of our product – click here to delve into its features, benefits, and why it's a must-have for you"
          inputPlaceholder="Product Description"
        />
        <Accordian
          tooltip={true}
          showOptions={true}
          heading={"Topic"}
          NumberIcon={Number3}
          description="Dive deeper into this topic – click here to explore the ins and outs, gain insights, and stay informed"
          inputPlaceholder="topic"
        />
      </div>
    </>
  );
}
