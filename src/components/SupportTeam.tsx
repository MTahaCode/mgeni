import Navbar from "./HeroSecction/Navbar"
import FooterSection from "./HeroSecction/Footer"

function SupportTeam() {
  return (
    <>
      <Navbar />
      <section>
        <div className="bg-white text-black">
          <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 lg:pb-20 mx-auto">
            
            <div className="max-w-3xl mb-10 lg:mb-14">
              <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">Mgeni Hotel System Support Team</h2>
              <p className="mt-1 text-black">Our dedicated support team ensures your hotel management system runs smoothly 24/7. From technical troubleshooting to operational guidance, we're here to help your business thrive.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                <img className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Support Team" />
              </div>
          
              <div>
                <div className="mb-4">
                  <h3 className="text-blue-600 text-xs font-medium uppercase">
                    Support Process
                  </h3>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                        1
                      </span>
                    </div>
                  </div>
                  
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-black">
                      <span className="#1e40af font-semibold">24/7 Technical Support:</span>
                      Instant help with system crashes, booking errors, and payment issues.
                    </p>
                  </div>
                </div>

                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600  font-semibold text-xs uppercase rounded-full">
                        2
                      </span>
                    </div>
                  </div>
                  
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm lg:text-base text-black">
                      <span className="#1e40af font-semibold">M-Pesa Integration:</span>
                      Assistance with payment gateway setup and transaction troubleshooting.
                    </p>
                  </div>
                </div>
            
                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600  font-semibold text-xs uppercase rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-black">
                      <span className="#1e40af font-semibold">Room Management Training:</span>
                      Staff onboarding for booking system, check-in/out procedures.
                    </p>
                  </div>
                </div>
            
                <div className="flex gap-x-5 ms-1">
                  <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                    <div className="relative z-10 size-8 flex justify-center items-center">
                      <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 text-blue-600 font-semibold text-xs uppercase rounded-full">
                        4
                      </span>
                    </div>
                  </div>
                  
                  <div className="grow pt-0.5 pb-8 sm:pb-12">
                    <p className="text-sm md:text-base text-black">
                      <span className="#1e40af font-semibold">Custom Reports & Analytics:</span>
                      Generate occupancy reports, revenue tracking, and performance metrics.
                    </p>
                  </div>
                </div>

                <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-hidden" href="#">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition" d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                    <path className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition" d="M14.05 6A5 5 0 0 1 18 10"></path>
                  </svg>
                  Contact Support Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  )
}

export default SupportTeam
