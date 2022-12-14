import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    background-color: green;
    padding: 20px;
    flex: 1;
`;
export const Header = styled.View`
    width: 100%;
    height: 70px;
    margin-bottom: 1px;
    flex-direction: row;
    border: 2px solid;
    border-radius: 20px;s
`;
export const IconUserHeader = styled.View`
    width: 15%;
    height: 70px;
`;
export const GreetingUserHeader = styled.View`
    width: 70%;
    height: 70px;
    padding: 10px;
`;
export const MessageUserHeader = styled.View`
    alignItems: center;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border-radius: 20px;
    margin: auto;
`;
export const Icon = styled.View`
    background-color: transparent;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: auto;
    alignItems: center;
    justify-Content: center;
`
export const IconHeader = styled(Icon)`

`
export const Text = styled.Text`
    color: #000;
    font-size: 18px;
    alignItems: center;
    font-weight: bold;

`
export const TextSaldo = styled(Text)`
  color: #000;
  alignItems: left;
`;
export const AreaFunction = styled.ScrollView`
    margin: 5px;

`;
export const FunctioMain = styled.TouchableOpacity`
    width: 100px;
    height: 130px;
    border-radius: 20px;
    vertical-align: top;
    alignItems: center;
    margin: 5px;
    padding: 4px;
    border: 2px solid;
`;
export const MainHome = styled.View`
    height: 570px;
    width: 100%;
    padding: 5px;
`;
export const ViewContent = styled.View`
    width: 100%;
    height: 85px;
    background-color: #c43a;
    border-radius: 10px;
    vertical-align: top;
    alignItems: center;
    margin-bottom: 15px;
    padding: 15px;
`;

export const ViewContentBox2 = styled.View`
    alignItems: left;
    padding: 30px;
    background-color: #c2c8c1
`;
export const ButtonPress = styled.TouchableOpacity`

`;
export const ViewInputTextMain = styled.View`
    width: 290px;
    height: 50px;
    border: 1px solid ;
    border-radius: 10px;
    padding: 4px;
    flex-direction: row;

`;
export const ViewInputText1 = styled(ViewInputTextMain)`
    width: 80%;
    height: 100%;
    border-radius: 0px;

`;
export const ViewInputText2 = styled(ViewInputTextMain)`
    width: 20%;
    height: 100%;
    border-radius: 0px;
    alignItems: center;
    flex-direction: center;
    padding: 1px;
`;
export const InputText = styled.TextInput`
    width: 100%;
    height: 100%;
    font-size: 20;
    font-weight: bold;
`;

export const BoxTrasation = styled.View`
    width: 100%;
    height: 150px;
    border: 2px solid blue;
    padding: 5px;

`;
export const AreaFunctionList = styled.FlatList`
    width: 100%;
    border: 2px solid red;
`;

export const BoxList = styled.View`
    width: 100%;
    height: 20px;
    border: 2px solid grey;

`;
export const TextList = styled.Text`
  font-size: 30px
  background-color: black;
`;
export const ButtonNavigation = styled.TouchableOpacity`
    width: 150px;
    height: 30px;
    border: 2px solid;
    border-radius: 5px;
    background-color: white;
    padding: 3px;
    margin-bottom: 5px;
`;