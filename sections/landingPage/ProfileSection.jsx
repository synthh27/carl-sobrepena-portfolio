import React from 'react'
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const ProfileSection = () => {
  return (
    <section
      id="profile"
      className="w-full lg:mx-auto bg-gradient-to-br from-paper-dim from-0% via-paper-dimmer via-15% to-paper-dim to-100%  border-t-2 border-t-paper px-8 pt-16 pb-8 sm:py-28 gap-8 flex flex-col items-center justify-center text-center"
    >
      <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-8">
        <p className="w-full font-display text-xs lg:text-lg uppercase tracking-wider font-semibold text-center text-ink hidden md:block">
          Let's Meet your <span className="block text- font-bold lg:text-3xl">Brand Identity and Digital Marketing Strategist</span> 
        </p>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:items-start justify-center gap-2 md:gap-4 lg:gap-8 text-center text-wrap">
            <div className="w-full flex flex-col rounded-lg gap-2 md:gap-4 lg:gap-6 text-center text-wrap">
              <p className="w-full block md:hidden font-display text-xs lg:text-lg uppercase tracking-wider font-semibold text-ink">
                I am Your <span className="block text- font-bold lg:text-2xl">Brand Identity and Digital Marketing Strategist.</span> 
              </p>
              <div className="relative w-full h-96 md:h-[34rem] lg:h-[46rem]  overflow-hidden drop-shadow-2xl">
                <Image
                    src="/images/dp.png"
                    alt="Carl Sobrepeña" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-3xl mx-auto"
                />
              </div>
            </div>
            <div className="w-full mx-auto flex flex-col items-center justify-center gap-2 md:gap-4 lg:gap-4 text-center md:text-left text-wrap">
              
              <h1 className="w-full font-display font-bold text-5xl md:text-6xl lg:text-8xl tracking-wide  text-ink md:text-brass-soft uppercase ">
                <span className="block mt-5 md:mt-0 text-ink-soft text-sm md:text-lg lg:text-2xl font-semibold ">Hi, I'm</span>
                Carl<span className="md:block text-3xl text-ink md:text-4xl lg:text-6xl font-semibold "> Sobrepeña</span>
              </h1>
              <p className="my-2max-w-full md:max-w-3xl lg:max-w-5xl tracking-normal leading-relaxed font-display text-ink text-sm md:text-sm lg:text-lg">
                It takes the right <span className="font-semibold px-2 rounded-sm bg-paper text-brass-soft">sales psychology-infused strategies.</span> to turn customer's interest into checked out sales. 
                <span className='x'> </span>
                Whether you're just starting or scaling, as a <span className="font-semibold px-1 rounded-sm bg-paper text-brass-soft">full-stack digital marketing strategist,</span>  I help business owners and entrepreneurs like you, establish stronger brand identities and seamless marketing pipelines by implementing 
              </p>

              <div className="w-full flex flex-col items-center justify-center text-center gap-4 pt-6">
                <a
                  href="https://cal.com/carl-sobrepena-3fexby/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-md bg-brass-soft px-8 lg:px-8 py-3 font-display text-xs font-semibold lg:text-md uppercase tracking-wide text-ink-dim transition-colors hover:bg-brass-soft/80 border-2 border-brass-soft hover:shadow-md "
                >
                  Let's discuss your challenges
                  <span className='block text-[0.6rem] lg:text-[.65rem] text-ink-dim font-thin'>100% free 15 min call.  Zero Commitment.</span>
                </a>
                <a
                  href="#how-we-work"
                  className="w-full font-display font-semibold rounded-md text-xs  uppercase tracking-wide border-brass px-8 py-3 text-ink transition-colors hover:text-ink/80 hover:border-brass/90 hover:shadow-xl border"
                >
                  Check our work process →
                  <span className='block text-[0.6rem] lg:text-[.65rem] text-ink-dim font-thin'>See how take care of our clients</span>
                </a>

                {/* Social Media Links */}
                <div className="w-full flex flex-col self-center items-center justify-center gap-6 mt-2 px-6 py-2 text-inkbo">
                  <h2 className="w-fit font-display text-xs lg:text-sm uppercase  font-semibold text-ink-dim text-center tracking-wider">
                    Let's keep in touch
                  </h2>
                  <div className="w-fit flex items-center justify-center gap-12">
                    <a
                      href="https://linkedin.com/in/carl-sobrepena"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-dim hover:text-brass-soft transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin size={32} />
                    </a>
                    <a
                      href="https://instagram.com/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-dim hover:text-brass-soft transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram size={32} />
                    </a>
                    <a
                      href="https://www.facebook.com/carl.sobrepena.wcd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-dim hover:text-brass-soft transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebook size={32} />
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileSection