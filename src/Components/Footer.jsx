import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faYoutube, faDiscord ,faTelegram, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
        <div className='bg-black mt-12 px-6 py-5 lg:py-16 lg:flex lg:justify-center xl:justify-around'> 
          <span className='py-2 cursor-pointer text-white hidden text-2xl xl:block font-extrabold mb-2'>
            Luke Bennett
          </span>
          
          <div className='lg:flex lg:space-evenly lg:gap-20'>
         
          <div className='relative'>
            <input className='peer hidden' type="checkbox" id="product" />
              <label htmlFor="product" className='peer-checked:[&>.plus-icon]:hidden peer-checked:[&>.minus-icon]:block'>
                <div className='py-2 mb-2 border-b border-zinc-800 lg:border-0'>
                <div>
                  <span className='text-gray-400 cursor-pointer lg:text-2xl lg:text-white lg:font-bold font-medium lg:cursor-default'>Products</span>
                </div>
                </div>
                <div className='w-4 lg:hidden text-gray-400 absolute plus-icon top-3 right-0'>
            <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='w-4 hidden minus-icon lg:hidden text-gray-400 absolute top-3 right-0'>
            <FontAwesomeIcon icon={faMinus} />
                </div>
              </label>
            <div className='max-h-0 lg:max-h-56 overflow-hidden lg:overflow-auto text-gray-400 peer-checked:max-h-56 duration-700'>
                  <ul className='leading-9'>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Explore</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Launchpad</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Invest</li>
                  </ul>
            </div>

          </div>

          <div className='relative'>
            <input className='peer hidden' type="checkbox" id="quickAccess" />
              <label htmlFor="quickAccess" className='peer-checked:[&>.plus-icon]:hidden peer-checked:[&>.minus-icon]:block'>
            <div className='py-2 mb-2 border-b lg:border-0 border-zinc-800'>
                <div>
                  <span className='text-gray-400 cursor-pointer font-medium lg:text-2xl lg:text-white lg:font-bold lg:cursor-default'>Quick Access</span>
                </div>
            </div>
            <span className='w-4 peer-checked:hidden text-gray-400 plus-icon lg:hidden absolute top-3 right-0'>
            <FontAwesomeIcon icon={faPlus} /></span>
            <span className='w-4 hidden minus-icon text-gray-400 peer-checked:block lg:hidden absolute top-3 right-0'><FontAwesomeIcon icon={faMinus} /></span>
              </label>
            <div className='max-h-0 lg:max-h-56 lg:overflow-auto overflow-hidden text-gray-400 peer-checked:max-h-56 duration-700'>
                  <ul className='leading-9'>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Curate</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Report a bug</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Request a feature</li>
                  </ul>
            </div>

          </div>

          <div className='relative'>
            <input className='peer hidden' type="checkbox" id="resource" />
              <label htmlFor="resource" className='peer-checked:[&>.plus-icon]:hidden peer-checked:[&>.minus-icon]:block'>
            <div className='py-2 mb-2 border-b lg:border-0 border-zinc-800'>
                <div>
                  <span className='text-gray-400 cursor-pointer font-medium lg:text-2xl lg:text-white lg:font-bold lg:cursor-default'>Resources</span>
                </div>
            </div>
            <span className='w-4 text-gray-400 plus-icon absolute lg:hidden top-3 right-0'><FontAwesomeIcon icon={faPlus} /></span>
            <span className='w-4 hidden minus-icon text-gray-400 absolute lg:hidden top-3 right-0'><FontAwesomeIcon icon={faMinus} /></span>
              </label>
            <div className='max-h-0 lg:max-h-56 lg:overflow-auto overflow-hidden text-gray-400 peer-checked:max-h-56 duration-700'>
                  <ul className='leading-9'>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Blog</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Docs</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Newsletter</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Litepaper</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>FAQ</li>
                  </ul>
            </div>

          </div>

          <div className='relative'>
            <input className='peer hidden' type="checkbox" id="company" />
              <label htmlFor="company" className='peer-checked:[&>.plus-icon]:hidden peer-checked:[&>.minus-icon]:block'>
            <div className='py-2 mb-2 border-b lg:border-0 border-zinc-800'>
                <div>
                  <span className='text-gray-400 cursor-pointer font-medium lg:text-2xl lg:cursor-default lg:text-white lg:font-bold'>Company</span>
                </div>
            </div>
            <span className='w-4 text-gray-400 plus-icon lg:hidden absolute top-3 right-0'><FontAwesomeIcon icon={faPlus} /></span>
            <span className='w-4 minus-icon hidden text-gray-400 lg:hidden absolute top-3 right-0'><FontAwesomeIcon icon={faMinus} /></span>
              </label>
            <div className='max-h-0 lg:max-h-56 lg:overflow-auto overflow-hidden text-gray-400 peer-checked:max-h-56 duration-700'>
                  <ul className='leading-9'>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>About Us</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Media Kit</li>
                    <li className='lg:hover:text-white duration-100 cursor-pointer'>Privacy Policy</li>
                  </ul>
            </div>

          </div>

          <div className='relative'>
            <input className='peer hidden' type="checkbox" id="connect" />
              <label htmlFor="connect" className='peer-checked:[&>.plus-icon]:hidden peer-checked:[&>.minus-icon]:block'>
            <div className='py-2 mb-2 border-b lg:border-0 border-zinc-800'>
                <div>
                  <span className='text-gray-400 cursor-pointer font-medium lg:cursor-default lg:text-2xl lg:text-white lg:font-bold'>Connect with us</span>
                </div>
            </div>
              <span className='w-4 plus-icon text-gray-400 lg:hidden absolute top-3 right-0'><FontAwesomeIcon icon={faPlus} /></span>
            <span className='w-4 minus-icon hidden text-gray-400 absolute lg:hidden top-3 right-0'><FontAwesomeIcon icon={faMinus} /></span>
              </label>
            <div className='max-h-0 lg:max-h-56 lg:overflow-auto overflow-hidden text-gray-400 peer-checked:max-h-56 duration-700'>
                  <ul className='leading-9'>
                    <li className='flex items-center lg:hover:text-white duration-100 cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faTwitter} size="sm" /></span><span>Twitter</span></li>
                    <li className='flex items-center lg:hover:text-white duration-100 cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faDiscord} size="sm" /></span><span>Discord</span></li>
                    <li className='flex items-center lg:hover:text-white duration-100 cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faTelegram} size="sm" /></span><span>Telegram</span></li>
                    <li className='flex items-center lg:hover:text-white duration-100 cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faLinkedin} size="sm" /></span><span>Linkedin</span></li>
                    <li className='flex items-center lg:hover:text-white duration-100 cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faInstagram} size="sm" /></span><span>Instagram</span></li>
                    <li className='flex items-center lg:hover:text-white duration-100 cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faYoutube} size="sm" /></span><span>Youtube</span></li>
                  </ul>
            </div>

          </div>

          </div>
        </div>
        <div className='py-4 lg:py-6 text-gray-300 bg-neutral-900 text-sm text-center'><span>&#169; 2022-2023, All Rights Reserved</span></div>
    </div>
  )
}

export default Footer
