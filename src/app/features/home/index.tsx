// import * as React from 'react';
// import styled from 'styled-components';
// import { scaleLinear } from 'd3';
// // @ts-ignore
// import { BarChart as BarChartLib } from 'react-d3-components';

// const Home = () => {
//     const data = [
//         {
//             label: '',
//             values: [
//                 { x: 'HTML', y: 80 },
//                 { x: 'CSS', y: 80 },
//                 { x: 'JS', y: 80 },
//                 { x: 'React', y: 75 },
//                 { x: 'Angular', y: 70 },
//             ],
//         },
//     ];
//     return (
//         <StyledContent>
//             <StyledText>
//                 I'm <StyledSpan>Shivam Latawa</StyledSpan>
//             </StyledText>
//             <StyledParagraph>Front-end Engineer</StyledParagraph>
//             <h2>Skills</h2>
//             <BarChartLib
//                 yScale={scaleLinear().domain([0, 100]).range([340, 0])}
//                 data={data}
//                 width={400}
//                 height={400}
//                 margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
//             />
//         </StyledContent>
//     );
// };

// export default Home;

// const StyledContent = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `;
// const StyledSpan = styled.span`
//     color: #e31b6d;
// `;
// const StyledText = styled.h1`
//     font-size: 30px;
// `;
// const StyledParagraph = styled.p`
//     font-size: 24px;
// `;


import * as React from 'react';
import styled from 'styled-components';
import profile from '../../../assets/profile.jpg';

const Home = () => {
    
    return (
        <StyledWrapper>
            <StyledContent>
                <StyledText>
                    Hey, I'm <StyledSpan>Shivam.</StyledSpan>
                </StyledText>
                <StyledParagraph>A self motivated, front-end engineer wih 6 years of web development experience, specialising in UI with a keen interest in full-stack development.</StyledParagraph>
            </StyledContent>
            <div>
                <img src={profile} alt="Shivam's image"/>
            </div> 
        </StyledWrapper>
    );
};

export default Home;

const StyledWrapper = styled.div`
    display: flex;
    margin: 8rem;
    justify-content: space-between;
`;
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40%
`;
const StyledSpan = styled.span`
    color: #e31b6d;
`;
const StyledText = styled.h1`
    color: ${(props) => props.theme.colors.white};
    font-size: 3.5rem;
    font-weight: 400;
`;
const StyledParagraph = styled.p`
    font-size: 2rem;
    line-height: 3rem;
    color: ${(props) => props.theme.colors.darkGrey};

`;
