import React,{useContext} from "react";
import "@testing-library/react-native";
import { fireEvent, render } from "@testing-library/react-native";
import { Home } from "./Home";


describe("render  component",()=>{
  jest.setTimeout(10000);
  const BaseProps = {
    navigation: {
      navigate: jest.fn(),
    },
  };


  it("render Home Component",async()=>{
    const page = render(<Home  {...BaseProps} />);
    expect(page);
    await new Promise((r) => {
           setTimeout(r, 5000);
          });
})
it("render flast list ",async()=>{
  const page=render(<Home/>)
  
  const flatlist=page.getByTestId('test-flatlist-item')
  expect(flatlist)
})
})


// describe("render Country Component",()=>{
//   const BaseProps = {
//       navigation: {
//         navigate: jest.fn(),
//       },
//     };
//     const route= {params:{name:"Delhi"}}
// jest.setTimeout(5000);

//   it("renders Country Component",async()=>{
//      render(<Weather  route={route}   {...BaseProps}/>)
//      await new Promise((r) => {
//       setTimeout(r, 5000);
//     });
     
//     })
    
 
// })