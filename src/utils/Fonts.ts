import localFont from '@next/font/local'


export default const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Extralight.ttf',
      weight: '200'
    },
    {
      path: '../public/fonts/ClashDisplay-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/ClashDisplay-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.ttf',
      weight: '600'
    },
    { 
      path: '../public/fonts/ClashDisplay-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-clashDisplay'
})
