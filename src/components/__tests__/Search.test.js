import Body from "../Body"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import { RESTAURANT_DATA } from "../mocks/data";
import "@testing-library/jest-dom"

global.fetch =jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {Promise.resolve(RESTAURANT_DATA)},
    });
})

test("Shimmer should on Homepage", () =>{

    const body=render(
    <StaticRouter>
    <Provider store={store}>
        <Body/>
    </Provider>
    </StaticRouter>
    );
    const shimmer = body.getByTestId("shimmer");
    expect(shimmer).toBeInTheDocument();

    console.log(shimmer);
})