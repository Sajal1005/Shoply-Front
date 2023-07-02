import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";

const StyledHeader = styled.header`
    background-color: #222;
`;
const Logo = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    position: relative;
    z-index: 3;
`;
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
`;
const StyledNav = styled.nav`
    gap: 45px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 70px 20px 20px;
    background-color: #222;
    @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
`;
const NavLink = styled(Link)`
    display: block;
    color:#aaa;
    text-decoration:none;
    padding: 10px 0;
    @media screen and (min-width: 768px) {
    padding:0;
    }
`;




export default function Header(){
    return(
        <StyledHeader>
            <Center>
                <Wrapper>
                <Logo href={'/'}>Shoply</Logo>
                <StyledNav>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/products'}>All Products</NavLink>
                    <NavLink href={'/categories'}>Categories</NavLink>
                    <NavLink href={'/account'}>Account</NavLink>
                    <NavLink href={'/cart'}>Cart (0)</NavLink>
                </StyledNav> 
                </Wrapper>
            </Center>
            
        </StyledHeader>
    );
}