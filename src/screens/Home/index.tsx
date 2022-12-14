import React from 'react';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { 
    Container,
    Header,
    IconUserHeader,
    Icon,
    GreetingUserHeader,
    Text,
    MessageUserHeader,
    AreaFunction,
    FunctioMain,
    IconHeader,
    MainHome,
    ViewContent,
    ButtonPress,
    ViewInputTextMain,
    ViewInputText1,
    ViewInputText2,
    InputText,
    AreaFunctionList,
    BoxTrasation,
    BoxList,
    ButtonNavigation,
    TextSaldo
} from './style';


export function Home({ navigation }) {
 
    const [nome, setNome] = useState("IF");
    const [saldo, setSaldo] = useState("");
    const [trazacao, setTrazacao] = useState([]);

    function alteraNome(){
        setNome("IVAN")
    }
    function alteraSaldo(){
        setSaldo(saldo)
    }
    function salvaTrazac(){
        setTrazacao((oldState) => [...oldState, setTrazacao] );
        console.log(trazacao);  
    }

    
    return (
        <Container>
            <Header>
                <IconUserHeader>
                    <Icon> <AntDesign name="user" size={42} color="black" /></Icon>
                    
                </IconUserHeader>
                <GreetingUserHeader>
                    
                    <Text>Ola</Text>
                    <ButtonPress onPress={alteraNome}><Text >{`${nome} Voce tem ${saldo}`}</Text></ButtonPress>
                </GreetingUserHeader>
                <MessageUserHeader>
                <Icon><Feather name="message-circle" size={42} color="black" /></Icon>
                </MessageUserHeader>

            </Header>
            <AreaFunction horizontal showsHorizontalScrollIndicator={false}  >
                <FunctioMain  > 
                    <IconHeader> <MaterialCommunityIcons name="cash" size={64} color="black" /></IconHeader>
                    <Text>Pix</Text>
                </FunctioMain>
                <FunctioMain>
                    <IconHeader> <MaterialCommunityIcons name="qrcode" size={64} color="black" /></IconHeader>
                    <Text>QR code</Text>
                </FunctioMain>
                <FunctioMain>
                    <IconHeader>  <MaterialIcons name="payments" size={64} color="black" /></IconHeader> 
                    <Text>Paga Boleto</Text>
                </FunctioMain>
                <FunctioMain>
                    <IconHeader>  <MaterialIcons name="payment" size={64} color="black" /></IconHeader> 
                    <Text>PicPay Card </Text>
                </FunctioMain>
                <FunctioMain>
                    <IconHeader>  <SimpleLineIcons name="people" size={64} color="black" /></IconHeader> 
                    <Text>Paga Pessoas </Text>
                </FunctioMain>
            </AreaFunction>
            <MainHome>
                <ViewContent>
                    <ViewInputTextMain>
                        <ViewInputText1>
                            < InputText  onChangeText={setSaldo}  placeholder="Saldo"/>
                            

                        </ViewInputText1>
                        <ViewInputText2>
                            <ButtonPress onPress={salvaTrazac}><Entypo name="chevron-right" size={32} color="black" /></ButtonPress>
                        </ViewInputText2>
                    </ViewInputTextMain>
                </ViewContent>
                
                <BoxTrasation >
                        <AreaFunctionList
                        data={trazacao}
                        renderItem={({item}) => 
                            <BoxList>
                                <BoxList>
                                    {item}
                                </BoxList>
                            </BoxList>
                        }
                        />
                    </BoxTrasation>
                    
                                     
               
            </MainHome>
            <ViewContent>
                <ButtonNavigation onPress={() => navigation.navigate('Login')}><TextSaldo> Login </TextSaldo> </ButtonNavigation>
                <ButtonNavigation onPress={() => navigation.navigate('NewsUsers')}> <TextSaldo> Criar Conta</TextSaldo></ButtonNavigation>
            </ViewContent>
            
        </Container>
    );
}
