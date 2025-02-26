import FooterContent from "./FooterContent"


function Footer() {
  return (
    <footer 
      className='relative h-[88vh] lg:h-[87vh] bg-light-200'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[88vh] lg:h-[87vh] w-full'>
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
//       className='relative h-[100vh] bg-light-200'
//       style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
//     >
//       <div className='fixed bottom-0 h-[100vh]  w-full'>
//         <FooterContent />
//       </div>
//     </footer>
//   )
// }

// export default Footer