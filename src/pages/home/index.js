import React from 'react'
import { Container, TextSection, CardSection, Card, CardText, LowerCard } from './styles'
import { AiOutlineLine, AiOutlineArrowRight } from 'react-icons/ai'
import { IoMdRocket } from 'react-icons/io'

import products from '../../assets/images/products.jpg'
import cases from '../../assets/images/cases.jpg'
import about from '../../assets/images/about.jpg'


export default function index() {

    const bgGradients = {
        card1: `(0, rgba(23, 180, 255, 0.5), rgba(23, 180, 255, 0.9))`,
        card2: `(0, rgba(117, 206, 247, 0.5), rgba(117, 206, 247, 0.9))`,
        card3: `(0, rgba(23, 106, 181, 0.5), rgba(23, 106, 181, 0.9))`
    }

    return (
        <>
            <Container>
                <TextSection>
                    <h2>Lorem Ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </TextSection>

                <CardSection>
                    <Card img={products} background={bgGradients.card1}>
                        <CardText>
                            <AiOutlineLine size={60} />
                            <h3>Produtos</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Nunc consequat interdum varius sit.
                                Dolor sed viverra ipsum nunc aliquet. Mauris commodo quis imperdiet massa
                                tincidunt. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Mauris
                                ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                            <button><AiOutlineArrowRight size={23} /></button>
                        </CardText>
                    </Card>

                    <Card img={cases} background={bgGradients.card2}>
                        <CardText>
                            <AiOutlineLine size={60} />
                            <h3>Cases de sucesso</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis
                                varius quam quisque id diam vel. Adipiscing bibendum est ultricies
                                integer quis. Integer eget aliquet nibh praesent tristique magna sit amet.
                                Tellus at urna condimentum mattis pellentesque id.
                            </p>
                            <button><AiOutlineArrowRight size={23} /></button>
                        </CardText>
                    </Card>

                    <Card img={about} background={bgGradients.card3}>
                        <CardText>
                            <AiOutlineLine size={60} />
                            <h3>Sobre nós</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Non arcu risus quis
                                varius quam quisque id diam vel. Adipiscing bibendum est ultricies
                                integer quis. Integer eget aliquet nibh praesent tristique magna sit amet.
                                Tellus at urna condimentum mattis pellentesque id.
                            </p>
                            <button><AiOutlineArrowRight size={23} /></button>
                        </CardText>
                    </Card>
                </CardSection>

                <TextSection>
                    <h2>Lorem Ipsum dolor amet</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate
                        odio ut enim. Diam sollicitudin tempor id eu nisl. Non blandit massa enim nec dui
                        nunc mattis enim ut. Blandit volutpat maecenas volutpat blandit aliquam etiam erat
                        velit scelerisque. Scelerisque mauris pellentesque pulvinar pellentesque habitant
                        morbi. At consectetur lorem donec massa sapien faucibus et molestie. Sed libero
                        enim sed faucibus turpis in eu. Sagittis aliquam malesuada bibendum arcu vitae
                        elementum curabitur vitae. Egestas maecenas pharetra convallis posuere morbi leo
                        urna molestie at. Sed egestas egestas fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Odio aenean sed adipiscing diam donec adipiscing tristique
                        risus. Crastincidunt lobortis feugiat vivamus at augue eget. Pellentesque elit
                        ullamcorper dignissim cras tincidunt lobortis feugiat. Amet luctus venenatis
                        lectus magna fringilla urna porttitor rhoncus. Sit amet est placerat in egestas
                        erat imperdiet sed euismod. Nunc congue nisi vitae suscipit. Libero nunc
                        consequat interdum varius sit amet. Eu lobortis elementum nibh tellus molestie
                        nunc. Ac ut consequat semper viverra nam libero justo.
                    </p>
                </TextSection>
            </Container>

            <LowerCard>
                <div>
                    <h3>
                        <IoMdRocket size={80} />
                        Lorem ipsum
                    </h3>

                    <p>
                        Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque
                        convallis a cras semper
                    </p>

                    <br />

                    <h4>Características principais</h4>

                    <ul>
                        <li>
                            <span />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed
                            vulputate odio. Orci ac auctor augue mauris augue neque gravida in fermentum. Potenti
                            nullam ac tortor vitae. Tincidunt lobortis feugiat vivamus at augue.</p>
                        </li>
                        <li>
                            <span />
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Habitant morbi tristique senectus et netus et malesuada fames.
                        </li>
                        <li>
                            <span />
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Laoreet id donec ultrices tincidunt arcu. Hac habitasse platea dictumst quisque sagittis
                            purus sit amet. Nisi quis eleifend quam adipiscing vitae. Aliquet porttitor lacus luctus
                            accumsan tortor posuere ac ut consequat. Nunc aliquet bibendum enim facilisis gravida
                            neque convallis. Nibh venenatis cras sed felis eget velit. Risus pretium quam vulputate
                            dignissim suspendisse in est ante.
                        </li>
                    </ul>
                </div>
            </LowerCard>
        </>
    )
}
