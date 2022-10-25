import styled from 'styled-components';

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;
`;

const InfoImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    line-height: 1.8;

    & > b {
        font-weight: var(--fw-bold);
    }
`;

export const Info = (props) => {
    const {
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        navigate,
      } = props;

    return (
    <Wrapper>
        <InfoImage src={flag} alt={name} />

        <div>
            <InfoTitle>{name}</InfoTitle>
            <ListGroup>
                <List>
                    <ListItem>
                        <b>Native Name:</b> {nativeName}
                    </ListItem>
                    <ListItem>
                        <b>Population</b> {population}
                    </ListItem>
                    <ListItem>
                        <b>Region:</b> {region}
                    </ListItem>
                    <ListItem>
                        <b>Sub Region:</b> {subregion}
                    </ListItem>
                    <ListItem>
                        <b>Capital:</b> {capital}
                    </ListItem>
                </List>
                <List>
                    
                </List>
            </ListGroup>
        </div>
        
    </Wrapper>
    );
};