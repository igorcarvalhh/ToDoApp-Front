import styled from "styled-components";

export const Aside = styled.aside`
    height: calc(100vh - 62px);
    width: 350px;
    background-color: #0D1117;
    border-right: 1px solid #21262d;
    position: fixed;
    left: calc(var(--sidebar-size) - 350px);
    top: 62px;
`;