import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    padding: 50px 35px;
`

export const TextSection = styled.div`
    margin-bottom: 40px;

    h2 {
        color: #3bc1ff;
        font-size: 40px;
    }

    p {
        color: #545d5c;
        font-size: 16px;
        max-width: 55%;
        margin-top: 16px;
    }
`

export const CardSection = styled.div`
    padding-bottom: 100px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const Card = styled.div`
    background-image: url(${props => props.img});
    background-color: #cccccc;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    margin: 0px 10px;

    @media (max-width: 600px){   
        margin: 10px 0px;
    }


    div {
        background: linear-gradient${props => props.background};
        height: 100%;
    }
`

export const LinkButton = styled(Link)`
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background-color: #ffffff;
        color: #2ebeff;
        border: none;
        width: 65px;
        height: 40px;
        border-radius: 25px;
        transition: opacity 0.2s;

        &:hover{
            opacity: 0.8;
        }
    
`

export const CardText = styled.div`
    color: #ffffff;
    padding: 20px 40px;
    
    P {
        margin: 20px 0 40px;
    }
`

export const LowerCard = styled.div`
    background:linear-gradient( #24b9ff 65%, #ffffff 0%);
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        margin: 10% 0;
        background: #ffffff;
        width: 60%;
        padding: 40px;
        border: 1px solid #cccccc;
        color: #7e7d7d;

        h3 {
            display: flex;
            align-items: center;
            color: #24b9ff;
            font-size: 30px;
        }

        p {
            font-size: 16px;
            margin: 20px 0 20px;
        }

        h4 {
            font-size: 20px;
            margin-bottom: 20px;
        }

        ul {
            
            li {
                display: flex;
                align-items: center;
                padding: 15px 25px 15px;
                list-style: none;
                border-top: 1px solid #efefef;
                border-bottom: 1px solid #efefef;
                font-size: 16px;

                span {
                    margin-right: 30px;
                    padding-right: 20px;
                    width: 20px;
                    height: 15px;
                    background-color: #24b9ff;
                    border-radius: 15px;

                    @media (max-width: 600px){   
                        display: none;
                    }

                }

            }
            
        }
     }
`