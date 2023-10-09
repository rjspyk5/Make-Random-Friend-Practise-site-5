import React from 'react';

export const Twofactor = () => {
    return (
        <div>
            <h6>Set sequrity Qustion</h6>
            <form className="twofactordesgin" action="">
                <div>
                    <li>
                        <span className="me-3 ">Your hometown Name?</span> <input type="text" />{' '}
                    </li>
                    <li>
                        <span style={{ paddingRight: '54px' }} className="me-3 ">
                            Your Pet Name?
                        </span>{' '}
                        <input type="text" />{' '}
                    </li>
                    <li>
                        <span style={{ paddingRight: '25px' }} className="me-3 ">
                            Your Favorite color?
                        </span>{' '}
                        <input type="text" />{' '}
                    </li>
                </div>
                <p style={{ fontSize: '10px' }}>You've to rember those answer.We'll ask you those qustion whenever sucpicious login might attempt</p>
                <button className="button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};
