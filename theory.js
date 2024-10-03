/**
 * 
 * hooks
 * 
 * Hooks were introduced in react 16.8 to use features like state, lifecycle, ref inside functional component.
 * 
 */

/**
 * 
 * what is next.js
 * 
 * Next.js is a react framework that provide solution for SSR, Static site generation, better SEO, page routing, code-splitting etc...
 * 
 * Better seo: The web crawlers can easily scan ssr pages since html are fully formed when it is served.
 * 
 * How SSR is achived in next.js
 * The SSR renders the pages on server and then render in bowser on request. The getServerSideProps make fetch rquest to get data and then pass it to as props to react component.
 * 
 * 
 * What are SSG(Static site genenration) and SSR
 * 
 * SSG: These pages are generated in build time. Here page data are static.
 * SSR: These pages are generate on request. Here we can show real time data.
 * 
 * getStaticProps, getServerSideProps, and getInitialProps
 * 
 * getStaicProps: fetches data at build time
 * getServerSideProps: fetches data on each requests
 * getInitialProps: works on both staitc generation and sever side rendering.
 * 
 * 
 */

/**
 * Interface vs types
 * They are used to define the strcuture of object
 * 
 * Sytax
 * 
 * in interface we can use extends to use other interface strcutureāśś
 * in type we use union or intersection to use other type body
 * 
 * in type once extends then we need to use all the params
 * in union types we just need to use each paramerter of types union
 * 
 * union -> string | number
 * intersection -> {type: string} & {type: number}
 * 
 * in interface if we use same name then all params gets unioned to 1
 * in type we will get errot that name is already used.
 * 
 */


export function getStaticPaths() {
    return{
        paths:[
            {params: {id:1}},
            {params:{id:2}}
        ],
        fallback:true
    }
}