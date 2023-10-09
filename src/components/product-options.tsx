import React, { useRef } from 'react';
import { Option } from './option';
import { Tooltip } from '@/components-ui/tooltip/tooltip';

type Props = {
  items: any[];
} & Omit<ProductItemProps, 'product'>;

export const ProductOptions = ({
  items,
  onProductChosen,
  chosenProduct,
}: Props) => {
  return (
    <>
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
    </>
  );
};

type ProductItemProps = {
  product: any;
  onProductChosen(chosenProduct: any): void;
  chosenProduct: any | null;
};

const ProductItem = ({
  product,
  onProductChosen,
  chosenProduct,
}: ProductItemProps) => {
  const hoverRef = useRef<HTMLDivElement>(null);

  return (
    <Tooltip
      key={product.id}
      PopComponent={
        <div className="max-w-[200px] bg-gray-7 text-white text-sm py-2 px-3 rounded-md whitespace-pre-wrap w-auto text-center">
          <div className="truncate">{product.description}</div>
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

          <div className="relative w-[calc(100%-28px)] space-x-2 flex items-center border border-gray-3 rounded-md p-2">
            <div className="w-[45px] h-[45px] flex-shrink-0">
              <img src={product.thumbnail} width="w-[45px]" />
            </div>
            <div className="flex flex-col h-[45px] truncate">
              <span className="truncate font-bold text-base">
                {product.displayName}
              </span>
              <span className="truncate text-gray-6 text-sm">{product.category}</span>
            </div>
          </div>
        </div>
      }
    />
  );
};
