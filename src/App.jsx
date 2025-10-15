import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductsCarousel from './components/ProductsCarousel'
import BranchesSection from './components/BranchesSection'
import Footer from './components/Footer'
import img1 from './assets/1.jpg'
import img2 from './assets/2.jpg'
import img3 from './assets/3.jpg'
import img4 from './assets/4.jpg'
import img5 from './assets/5.jpg'
import img6 from './assets/6.jpg'
import img7 from './assets/7.jpg'
import img8 from './assets/8.jpg'
import img9 from './assets/9.jpg'
import img10 from './assets/10.jpg'
import img11 from './assets/11.jpg'


function App() {
  return (
    <div className='p-0 m-0 flex flex-col gap-10'>
      <div>
        <Navbar />
      <Home />
      </div>
      
 

      {/* build items array with map from images */}
      {(() => {
        const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11]
        const titles = ['الهبة','أرز بلبن مكسرات',' قشطوطة رايس بودينج','الفزعة شوكولاتة','كشري مانجا','قشطوطة أرز بلبن بالمانجو','شوكو برجر','ريموناتادا مانجو','كونو ايس','السج الدح امبو','قنبلة دبي']
        const items = images.map((image, i) => ({
          id: i+1,
          image,
          title: titles[i] || `منتج ${i+1}`,
          price: (i+1) * 10 + 30,
          onAdd: () => alert(`أضفت ${titles[i] || `منتج ${i+1}`}`)
        }))

        return <ProductsCarousel items={items} />
      })()}
       <BranchesSection />
      <Footer />
      
    </div>
  )
}

export default App
