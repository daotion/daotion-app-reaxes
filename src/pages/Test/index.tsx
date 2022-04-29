// class

import React ,{
	Component ,
	useState,
} from "react";
import { set } from "mobx";


const creator = ( _class ) => {
	
};

const parisite = (initial = 0) => {
	
};
class DemoC extends Component {
	
	useParisite = creator(this , parisite)
	
	render() {
		return <span>
		
		</span>;
	}
}




const useCount = (initial = 0) => {
	const [count , setCount] = useState<number>( initial );
	return [count,setCount];
};
const DemoH:React.FC = (props) => {
	const [count , setCount] = useCount( 0 );
	return <span
		onClick={() => setCount(count+1)}
	>
		{count}
	</span>
};
