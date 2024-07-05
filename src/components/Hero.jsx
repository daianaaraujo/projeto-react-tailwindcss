import styles from './Hero.module.css';
export default function Hero() {
  return (
    <>
    <section className={styles.hero}>
      <div className="border-4 border-red-800 min-h-screen w-auto flex justify-center items-center">
        <div className="border-4 border-blue-950 min-h-80 max-w-3xl block p-7 text-center">
          <h1 className="text-6xl text-custom-green font-bold">A small business is only has good as its tools.</h1>
          <p className="text-xl">We’re different. Flex is the only saas business platform
           that lets you run your business on one platform, seamlessly across all digital
            channels.
          </p>
          <div className="flex justify-center items-center mt-6 gap-6">
            <button className="h-14 w-52 border-2 border-green-900 bg-custom-green text-custom-text01">Request a Demo</button>
            <button className="w-32 h-14 border-2 border-green-900 bg-custom-gray text-custom-text01">Sign Up</button>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}


