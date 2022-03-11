import styles from './Partners.module.css'

const Partners = () => {
  return (
    <>
    <section className={styles.page_section}>
    <div className="container mx-auto">
      <div className="text-center items-center">

      <h4 className="font-bold py-5 my-4">Our Partners</h4>
      </div>

      {/* <div className="grid grid-cols-3 gap-1">
        <div className=" flex items-center justify-center">
          image
        </div>
        <div className=" flex items-center justify-center">
          image
        </div>
        <div className=" flex items-center justify-center">
          image
        </div>

      </div> */}

      <div className="flex flex-row items-center justify-center">
        <div className="">
          image
        </div>
        <div className="">
          image
        </div>
        <div className="">
          image
        </div>

      </div>
    </div>
    </section>
    </>
  )
}

export default Partners;