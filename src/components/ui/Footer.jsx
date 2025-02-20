import FooterContent from "./FooterContent"


function Footer() {
  return (
    <footer 
      className='relative h-[90vh] lg:h-[87vh] bg-light-200'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[90vh] lg:h-[87vh] w-full'>
        <FooterContent />
      </div>
    </footer>
  )
}

export default Footer