import React from "react";
import styled from "styled-components";
import palette from "../../styles/palette";

const Container = styled.div`
    width: 100%;
    height: 46px;

    select {
        width: 100%;    
        height: 100%;
        background-color: white;
        border: 1px solid ${palette.gray_eb};
        padding: 0 11px;
        border-radius: 4px;
        outline: none;
        -webkit-appearance: none;
        background-image: url("/static/svg/common/selector/selector_down_arrow.svg");
        background-position: right 11px center;
        background-repeat: no-repeat;
        font-size: 16px;
        
        &:focus {
            border-color: ${palette.dark_cyan};
        }
    }
`;

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options?: string[];
    disabledOptions?: string[];
    value?: string;

}

const Selector: React.FC<IProps> = ({ 
    options = [],
    disabledOptions = [], 
    ...props
    }) => {
    const new_options = disabledOptions.concat(options);
    return (
        <Container>
            <select {...props}>
                {
                    new_options.map((option, index) => (
                        index===0 ? (
                        <option key={index} value={option} disabled>
                            {option}
                        </option>)
                        : (
                        <option key={index} value={option} >
                            {option}
                        </option>)
                        
                        )
                    )
                }
                {/* {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))
                } */}
            </select>
        </Container>
    );
};

export default Selector;