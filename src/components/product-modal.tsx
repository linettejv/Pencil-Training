import { debounce } from 'lodash';
import { useRef, useState } from 'react';
import { Modal } from './modal';
import { PrimaryButton } from './button/primary-button';
import { Spinner } from '@/components-ui/spinner/spinner';
import InputControlledComponent from './input';
import { ButtonSize } from '@/components-ui/enums/ui';
import { ProductOptions } from './product-options';

export const ProductModal = ({
  isOpen,
  closeModal,
  selectedProduct,
  onProductSelect,
  isSaveAssetModal = false,
}: {
  isOpen: boolean;
  closeModal: () => void;
  selectedProduct: any;
  onProductSelect: (product: any | null) => void;
  isSaveAssetModal?: boolean;
}) => {
  const [chosenProduct, setChosenProduct] = useState(selectedProduct);

  const [productSearchKeyword, setProductSearchKeyword] = useState('');

  const {

    noProductResult,
    products,
    setProductSearchKeyword,
   
  } = useProductPanel({
    isProductPanelOpen: isOpen,
    isAssetsPanelOpen: false,
  });

  const handleAssetSearch = useRef(
    debounce(setProductSearchKeyword, 500)
  ).current;

  const onSelectButtonClick = () => {
    onProductSelect(chosenProduct);
    closeModal();
  };

  const onCloseButtonClick = () => {
    setChosenProduct(selectedProduct);
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      isCloseable={true}
      onCloseButtonClick={onCloseButtonClick}
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
            <InputControlledComponent
              withSearchIcon={true}
              placeholder="Search"
              onChange={(e: { target: { value: any } }) =>
                handleAssetSearch(e.target.value)
              }
            />
            <div className="h-[282px] bg-white border border-gray-3 rounded-lg p-6 space-y-3 overflow-y-scroll">
              {noProductResult ? (
                'No Product found.'
              ) : (
                <>
                  <ProductOptions
                    items={products}
                    onProductChosen={setChosenProduct}
                    chosenProduct={chosenProduct}
                  />
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
  );
};
