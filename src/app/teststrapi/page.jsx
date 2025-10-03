
async function loader(){
    const path = "/api/home-page";
    const BASE_URL = "http://localhost:1337";
    const url = new URL(path, BASE_URL);

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    return {...data.data}
}

export default async function TestPage(){
    const data = await loader();
    console.log(data);

    return (
        <div>
            {data.title} <br/>
            {data.description}
        </div>
    )
}