import React, { useContext } from "react";
import "@testing-library/react-native";
import { fireEvent, render } from "@testing-library/react-native";
import { Home } from "./Home";

describe("render  component", () => {
  jest.setTimeout(30000);
  const BaseProps = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  it("render Home Component", async () => {
    await new Promise((r) => {
      setTimeout(r, 10000);
    });
    const page = render(<Home {...BaseProps} />);
    expect(page);
    await new Promise((r) => {
      setTimeout(r, 7000);
    });
  });
  it("render flast list ", async () => {
    const page = render(<Home />);
    await new Promise((r) => {
      setTimeout(r, 10000);
    });
    const flatlist = page.getByTestId("test-flatlist-item");
    expect(flatlist);
  });
});

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
