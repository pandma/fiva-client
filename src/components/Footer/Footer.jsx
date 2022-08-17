import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-google'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <i className='fab fa-github'></i>
                    </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3'></i>
                                Fiva.
                            </h6>
                            <p>
                                En Fiva nos comprometemos a reducir la factura de nuestros clientes y ofrecemos los mejores servicios y productos.
                            </p>
                            <p>
                                En Fiva tenemos el Primer Software de optimización de potencia electrica.
                            </p>
                        </div>

                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Servicios</h6>
                            <p>
                                <a href='/power' className='text-reset'>
                                    Ajuste de optimización de potencia
                                </a>
                            </p>
                            <p>
                                <a href='/energy' className='text-reset'>
                                    Estudios de eficiencia energetica
                                </a>
                            </p>
                            <p>
                                <a href='/transition' className='text-reset'>
                                    Transición a energía renovable
                                </a>
                            </p>
                            <p>
                                <a href='/solutions' className='text-reset'>
                                    Soluciones de software
                                </a>
                            </p>
                        </div>

                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

                            <p>
                                <i className='fas fa-envelope me-3'>
                                    fiva_support@proton.me
                                </i>
                            </p>
                            <p>
                                <i className='fas fa-phone me-3'>
                                    Comercial team
                                </i> +34 624436442
                            </p>
                            <p>
                                <i className='fas fa-print me-3'>
                                    Technical team
                                </i> +34 601118739
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='/'>
                    fiva.
                </a>
            </div>
        </MDBFooter>
    );
};

export default Footer;