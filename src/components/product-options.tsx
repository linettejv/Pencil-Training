import { get } from 'lodash';
import React, { useRef } from 'react';
import { Option } from '@components/option/option';

import { ImageUrl } from 'types/ui/types';
import { Tooltip } from 'components-ui/tooltip/tooltip';
import { Product } from '@modules/asset-library/types';
import { DefaultProductNames } from '@server/types';
import { ProductListContextProvider } from '@modules/asset-library/context/product-context';
import { ResizedImage } from 'components-ui/image/resized-image';

type Props = {
  items: Product[];
} & Omit<ProductItemProps, 'product'>;

export const ProductOptions = ({
  items,
  onProductChosen,
  chosenProduct,
}: Props) => {
  return (
    <ProductListContextProvider isProductEditable={true}>
      {items.map((item) => {
        return (
          <ProductItem
            key={item.id}
            product={item}
            onProductChosen={onProductChosen}
            chosenProduct={chosenProduct}
          />
        );
      })}
    </ProductListContextProvider>
  );
};

type ProductItemProps = {
  product: Product;
  onProductChosen(chosenProduct: Product): void;
  chosenProduct: Product | null;
};

const ProductItem = ({
  product,
  onProductChosen,
  chosenProduct,
}: ProductItemProps) => {
  const imgThumbnailUrl = get(product, 'metadata.thumbnail', ImageUrl.NO_IMAGE);
  const metadataCates = get(product, 'metadata.categories');
  const categoryNames = Array.isArray(metadataCates)
    ? metadataCates.join(', ')
    : '';

  const hoverRef = useRef<HTMLDivElement>(null);

  return (
    <Tooltip
      key={product.id}
      PopComponent={
        <div className="max-w-[200px] bg-gray-7 text-white text-sm py-2 px-3 rounded-md whitespace-pre-wrap w-auto text-center">
          <div className="truncate">{product.name}</div>
        </div>
      }
      RefComponent={
        <div
          ref={hoverRef}
          className="flex items-center cursor-pointer space-x-2"
          onClick={() => {
            if (chosenProduct?.id === product.id) {
              onProductChosen(null);
            } else {
              onProductChosen(product);
            }
          }}
        >
          <Option
            appearance="secondary"
            isMultiSelect={false}
            isSelectable={true}
            isSelected={chosenProduct?.id === product.id}
          />
          {product.name === DefaultProductNames.NO_PRODUCT ? (
            <div className="h-[63px] w-[calc(100%-28px)] flex flex-col justify-center items-center border border-gray-3 rounded-md text-gray-6">
              No product
            </div>
          ) : (
            <div className="relative w-[calc(100%-28px)] space-x-2 flex items-center border border-gray-3 rounded-md p-2">
              <div className="w-[45px] h-[45px] flex-shrink-0">
                <ResizedImage src={imgThumbnailUrl} width="w-[45px]" />
              </div>
              <div className="flex flex-col h-[45px] truncate">
                <span className="truncate font-bold">
                  {product.metadata.displayName}
                </span>
                <span className="truncate text-gray-6">{categoryNames}</span>
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};
