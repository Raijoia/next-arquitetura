import { HomeScreen } from "./HomeScreen";
import { customRender } from "@rai/test-commons/react-testing-library";

function CustomWrapper({ children }) {
  return <div>{children}</div>;
}

const render = customRender(CustomWrapper);

describe("<HomeScreen />", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
