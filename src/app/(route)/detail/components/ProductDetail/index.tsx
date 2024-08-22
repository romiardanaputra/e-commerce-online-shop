import { productDataContentProps } from '../../index.props'

type ProductDetailComponentProps = {
  productContent: productDataContentProps[]
}

const ProductDetailComponent = ({
  productContent
}: ProductDetailComponentProps) => {
  return (
    <>
      <div className='xl:max-w-4xl'>
        <div className='my-4 space-y-2'>
          <h2 className='text-2xl font-medium'>{productContent[0].name}</h2>
          <h6 className='text-sm text-neutral-400'>
            By {productContent[0].owner}
          </h6>
          <p className='text-lg font-medium text-orange-600'>
            $ {productContent[0].price}
          </p>
        </div>
        <div className='text-pretty leading-relaxed'>
          <p className='text-neutral-600'>{productContent[0].description}</p>
        </div>
      </div>
    </>
  )
}

export default ProductDetailComponent
