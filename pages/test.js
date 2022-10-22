function Page({ data }) {

    return (
        <>
        {JSON.stringify(data)}
        </>
    )
    // Render data...
  }
  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const data = new Date()
  
    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page