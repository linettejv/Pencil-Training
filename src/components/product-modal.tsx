import { useDerivedState } from '@lib/client/use-derived-state';
import { Product } from '@modules/asset-library/types';
import { useProductPanel } from '@modules/assets/hooks/use-product-panel';
import { PrimaryButton } from 'components-ui/button/primary-button';
import { Input } from 'components-ui/input/input';
import { Modal } from 'components-ui/modal/modal';
import { Spinner } from 'components-ui/spinner/spinner';
import { ButtonSize } from 'core/enums';
import { debounce } from 'lodash';
import { useRef } from 'react';
import { Waypoint } from 'react-waypoint';
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
  selectedProduct: Product | null;
  onProductSelect: (product: Product | null) => void;
  isSaveAssetModal?: boolean;
}) => {
  const [chosenProduct, setChosenProduct] = useDerivedState(selectedProduct);

  const {
    isProductLoading,
    noProductResult,
    products,
    setProductSearchKeyword,
    hasNextProductPage,
    fetchNextProductPage,
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
  );
};
