import FooterContent from "./FooterContent"


function Footer() {
  return (
    <footer 
      className='relative lg:h-[87vh] bg-light-200'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      {/* Mobile: Normal footer (non-fixed) */}
      <div className='block lg:hidden w-full'>
        <FooterContent />
      </div>
      
      {/* Desktop: Fixed footer */}
      <div className='hidden lg:block fixed bottom-0 h-[100vh] w-full'>
        <FooterContent />
      </div>
    </footer>
  )
}

export default Footer

// import FooterContent from "./FooterContent"

// function Footer() {
//   return (
//     <footer 
//       className='footer relative bg-light-200 lg:h-[100vh]'
//       style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
//     >
//       {/* Mobile: Normal footer (non-fixed) */}
//       <div className='block lg:hidden w-full'>
//         <FooterContent />
//       </div>
      
//       {/* Desktop: Fixed footer */}
//       <div className='hidden lg:block fixed bottom-0 h-[100vh] w-full'>
//         <FooterContent />
//       </div>
//     </footer>
//   )
// }

// export default Footer