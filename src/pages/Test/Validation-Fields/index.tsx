
export const Validations = ComponentWrapper( () => {
	const {
		Input ,
		Select,
	} = antd;
	const {
		input ,
		select,
		validate ,
		setFields ,
		resetValidation,
		validations,
	} = reaxel_validate_fields();
	console.log( 1111111111 );
	return <>
		<div
			style = {{
				
			}}
		>
			<Input
				value = { input }
				size = "large"
				status = {convert(validations.input)}
				onInput = { ( e ) => setFields( { input : e.target.value } ) }
			/>
			{validations.input === false && <p
				style={{
					color : "red",
				}}
			>输入不合法!</p>}
			<Select
				value = { select }
				size = "large"
				status = {convert(validations.select)}
				onChange = {(value) => {
					setFields( { select : value } );
				}}
			>
				<Select.Option value="opt1">opt1</Select.Option>				
				<Select.Option value="opt2">opt2</Select.Option>				
				<Select.Option value="opt3">opt3</Select.Option>				
			</Select>
		</div>
	
		<Button>submit</Button>
		<Button
			onClick={() => {
				resetValidation();
			}}
		>Reset Validate Status</Button>
	</>
} );
import { reaxel_fact__validation } from './Input';



const reaxel_validate_fields = function(){
	
	const {store,setState} = orzMobx({
		input: null ,
		select : null ,
	})
	const validates = {
		input : async (value) => {
			await orzPromise( ( resolve ) => setTimeout( () => resolve() , 1000 ) );
			if(value !== '1111'){
				throw false;
			}else {
				return true;
			}
		},
		select : (value) => {
			if(value !== 'opt2'){
				return false;
			}else {
				return true;
			}
		},
	};
	
	const reaxel_validation_Input = reaxel_fact__validation( validates.input );
	const reaxel_validation_Select = reaxel_fact__validation( validates.select );
	
	return () => {
		
		return {
			get input(){
				return store.input;
			},
			get select(){
				return store.select;
			},
			get validations() {
				return {
					input : reaxel_validation_Input(store.input).valid,
					select : reaxel_validation_Select(store.select).valid,
				};
			},
			get validators() {
				return validates;
			},
			setFields(fields:Parameters<typeof setState>['0']){
				setState( fields );
			},
			validate(){
				reaxel_validation_Input(store.input).validate();
				reaxel_validation_Select( store.select ).validate();
			},
			resetValidation(){
				reaxel_validation_Input(store.input).reset();
				reaxel_validation_Select( store.select ).reset();
			},
		};
	};
}();
const convert = (validation) => {
	switch ( validation ){
		case null :
		case true : {
			return ''
		};
		case false : {
			return 'error';
		}
		
	}
};

const { Button } = antd;
