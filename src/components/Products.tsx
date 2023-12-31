/* eslint-disable @next/next/no-img-element */
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';

const LoadingImage = '/loading.png';
const Products = () => {
  return (
    <section className='section-layout41' id='products'>
      <img
        src='./sphere.png'
        loading='lazy'
        sizes='(max-width: 520px) 100vw, 520px'
        srcSet='
        sphere.png 500w,
        sphere.png       520w
      '
        alt=''
        className='image-6'
      />
      <div className='page-padding'>
        <div className='container-large'>
          <div className='padding-vertical padding-xxhuge'>
            <div className='w-layout-grid layout41_component'>
              <div className='layout41_content-left'>
                <div className='margin-bottom margin-xsmall'>
                  <div className='label'>Products, Commitment, Community</div>
                </div>
                <h2 className='heading'>CompareAi vision for the future</h2>
              </div>
              <div className='layout41_content-right'>
                <p className='text-size-medium text-color-white'>
                  We aim for CompareAl to become the premier platform for comparing a wide range of choices, from daily decisions to significant life choices.
                  Through pioneering Al-driven data analysis, we are dedicated to delivering a decision support system that relies on accurate data and a
                  profound understanding of individual behavior and needs.
                </p>
              </div>
            </div>
            <div className='w-layout-grid security-wrapper'>
              <a
                id='w-node-_1e6b5064-950b-e150-31dc-8acaee128b27-1c48dc11'
                href='https://t.me/ShopperAIBot'
                target='_blank'
                className='glass-panel padding-2rem link-block-6 shopper-ai glass-bd-br'>
                <div className='glass-panel-child '>
                  <div>
                    <img src='./shoppe-ai.png' loading='lazy' alt='' className='image-5 obsidian' />
                  </div>
                  <div className='label text-align-center text-color-white text-weight-medium '>ShopperAI</div>
                  <div data-w-id='52474d49-5c2c-509e-003b-d69c217d672a' className='check-wrapper'>
                    <CheckIcon sx={{ color: 'white' }}></CheckIcon>
                  </div>
                  <span className='slogan'>Find the best deals</span>
                </div>
              </a>
              <div id='w-node-_1e6b5064-950b-e150-31dc-8acaee128b2c-1c48dc11' className='glass-bd-b glass-panel padding-2rem'>
                <div className='glass-panel-child'>
                  <div>
                    <img src='./solis-ai.png' loading='lazy' alt='' className='image-5 certik' />
                  </div>
                  <div className='label text-align-center text-color-white text-weight-medium'>ScanAI</div>
                  <div data-w-id='e21688b8-d833-1458-a074-d4d0b2841c88' className='check-wrapper-none'>
                    <Image src={LoadingImage} width={23} height={23} alt=''></Image>
                  </div>
                  <span className='slogan'>Unlocking Insights, Empowering Decisions</span>
                </div>
              </div>
              <div id='w-node-_1e6b5064-950b-e150-31dc-8acaee128b31-1c48dc11' className='glass-bd-br glass-panel padding-2rem'>
                <div className='glass-panel-child'>
                  <div>
                    <img src='./scan-ai.png' loading='lazy' alt='' className='image-5 sf' />
                  </div>
                  <div className='label text-align-center text-color-white text-weight-medium'>SolisAI</div>
                  <div data-w-id='ea893e35-5778-cd3f-bb9a-c09561c543a1' className='check-wrapper-none'>
                    <Image src={LoadingImage} width={23} height={23} alt=''></Image>
                  </div>
                  <span className='slogan'>Your Beacon in the Crypto Storm</span>
                </div>
              </div>
              <div id='w-node-_1e6b5064-950b-e150-31dc-8acaee128b36-1c48dc11' className='glass-panel padding-2rem glass-bd-b'>
                <div className='glass-panel-child'>
                  <div>
                    <img src='./eva.png' loading='lazy' alt='' width='100' className='image-5 prisma' />
                  </div>
                  <div className='label text-align-center text-color-white text-weight-medium'>Eva Assistant</div>
                  <div data-w-id='69d5285e-06a2-2318-25b7-f0921ea97ac0' className='check-wrapper-none'>
                    <Image src={LoadingImage} width={23} height={23} alt=''></Image>
                  </div>
                  <span className='slogan'>Your 24/7 Crypto Investment Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
