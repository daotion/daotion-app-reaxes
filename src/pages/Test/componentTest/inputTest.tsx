import {Input, InputTextarea} from '@@common/Xcomponents/Input';
import SelectTags from '@@common/Xcomponents/SelectTags';

const InputTest = () => {
  return (
    <div style={{
      padding: 32
    }}>
      <Input placeholder="ahahahha lalaalal"/>
      <InputTextarea placeholder="ahahahha lalaalal"/>
      <SelectTags
        placeholder="Please select aaa"
        defaultValue={['hello', 'world', 'lalal', 'haah']}
      />
    </div>
  )
}

export default React.memo(InputTest);
