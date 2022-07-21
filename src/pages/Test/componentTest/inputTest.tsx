import { Button } from "@@common/Xcomponents/Button";
import { SelectTags, Option } from "@@common/Xcomponents/SelectTags";
import { BtnCreateSpaceSvgComponent } from "@@pages/_SvgComponents/Btn-Create-Space.svg-component";
import { HeaderToggleThemeIconSvgComponent } from "@@pages/_SvgComponents";
import { Select } from "@@common/Xcomponents/Select";

const InputTest = () => {
  return (
    <div
      style={{
        padding: 32,
        backgroundColor: "#676767",
      }}
    >
      <Select defaultOpen={true} defaultValue="china" placeholder="Select a person">
        <Option value="china" label="China">
          <span>
            <span>🇨🇳</span>
            China (中国)
          </span>
        </Option>
        <Option value="usa" label="USA">
          <span>
            <span>🇺🇸</span>
            USA (美国)
          </span>
        </Option>
      </Select>
      <SelectTags
        placeholder="Enter tags to describe your item"
        defaultValue={["aaa", "bbb", "ccc", "ddd", "eee"]}
      >
        <Option value="china" label="China">
          <span>
            <span>🇨🇳</span>
            China (中国)
          </span>
        </Option>
        <Option value="usa" label="USA">
          <span>
            <span>🇺🇸</span>
            USA (美国)
          </span>
        </Option>
      </SelectTags>
      <Button type="primary">hello</Button>
      <hr />
      <Button>
        <HeaderToggleThemeIconSvgComponent />
      </Button>
      <hr />
      <Button
        type="primary"
        size="large"
        icon={HeaderToggleThemeIconSvgComponent}
      >
        hello
      </Button>
      <hr />
      <Button type="primary" size="large" icon={BtnCreateSpaceSvgComponent}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, magnam?
      </Button>
      <div>
        <Button type="ghost">hello</Button>
        <hr />
        <Button size="large" icon={<HeaderToggleThemeIconSvgComponent />} />
        <hr />
        <Button
          type="ghost"
          size="large"
          icon={HeaderToggleThemeIconSvgComponent}
        >
          hello
        </Button>
        <hr />
        <Button danger size="large" icon={BtnCreateSpaceSvgComponent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
          magnam?
        </Button>
        <Button
          danger
          size="large"
          icon={<HeaderToggleThemeIconSvgComponent />}
        />
        <Button danger size="middle" icon={BtnCreateSpaceSvgComponent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
          magnam?
        </Button>
      </div>
    </div>
  );
};

export default React.memo(InputTest);
