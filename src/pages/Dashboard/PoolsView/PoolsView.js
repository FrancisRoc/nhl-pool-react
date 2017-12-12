import { defineMessages, FormattedMessage } from 'react-intl';
import Pannel from '../../../components/Pannel';
import H3 from '../../../components/H3';
import styled from 'styled-components';
import Color from 'color';
import React from 'react';

const messages = defineMessages({
  newPoolPannel: {
    id: 'pools.newPoolPannel',
    defaultMessage: 'Create a pool',
  },
  newPoolWithBasis: {
    id: 'pools.newPoolWithBasis',
    defaultMessage: 'Copy a pool',
  },
  newPoolWithBasisText: {
    id: 'pools.newPoolWithBasisText',
    defaultMessage:
      'Already have a pool created? Save time by starting from that pool.',
  },
  members: {
    id: 'pools.members',
    defaultMessage: 'Members',
  },
});

const PoolToolBox = styled.div`
  display: flex;
  height: 50px;
`;

const PoolsPresentation = styled.div`
  display: flex;
`;

const PoolPannel = styled(Pannel)`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
  margin: 20px;
  background: ${props =>
    props.hoverBg
      ? Color(props.theme.palette.primaryLight)
          .fade(0.65)
          .toString()
      : props.theme.palette.white};
`;

const CenteredH3 = styled(H3)`
  width: 100%;
  text-align: center;
`;

const PlusIcon = styled.i`
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.palette.accentDark};
    border-radius: 3px;
  }
`;

const NewPoolWithBasis = styled.div`
  margin: 8px;
`;

const CopyPoolTitle = styled.div`
  color: ${props => props.theme.palette.success};
  padding: 5px 0;
`;
const CopyPoolText = styled.div`
  color: ${props => props.theme.palette.text};
  padding: 5px 0;
  font-size: 14px;
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const SectionTitle = styled.div`
  font-weight: bold;
  color: ${props => props.theme.palette.text};
  margin-bottom: 10px;
`;
const Member = styled.div`
  display: flex;
  align-items: center;
  margin: 2px 0;
`;
const MemberName = styled.span`
  color: ${props => props.theme.palette.text};
  padding: 5px 8px;
`;
const Divider = styled.div`
  border: 1px solid ${props => props.theme.palette.border};
  box-sizing: border-box;
  width: 100%;
  height: 0;
`;
const PoolPannelFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 8px 0;
`;
const FooterIcon = styled.i`
  padding: 5px;
`;

class PoolsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hoverNewPool: false };
  }
  render() {
    return (
      <div>
        <PoolToolBox>TODO POOL TOOLBOX</PoolToolBox>
        <PoolsPresentation>
          <PoolPannel hoverBg={this.state.hoverNewPool}>
            <CenteredH3>
              <FormattedMessage {...messages.newPoolPannel} />
            </CenteredH3>
            <PlusIcon
              className="fa fa-plus fa-5x"
              onMouseOver={() => {
                this.setState({ hoverNewPool: true });
              }}
              onMouseOut={() => {
                this.setState({ hoverNewPool: false });
              }}
            />
            <NewPoolWithBasis>
              <CopyPoolTitle>
                <FormattedMessage {...messages.newPoolWithBasis} />
              </CopyPoolTitle>
              <CopyPoolText>
                <FormattedMessage {...messages.newPoolWithBasisText} />
              </CopyPoolText>
            </NewPoolWithBasis>
          </PoolPannel>
          <PoolPannel>
            <CenteredH3>Nom du pool</CenteredH3>
            <Members>
              <SectionTitle>
                <FormattedMessage {...messages.members} />
              </SectionTitle>
              <Member>
                <i className="fa fa-user" />
                <MemberName>Francis Rochon</MemberName>
              </Member>
              <Member>
                <i className="fa fa-user" />
                <MemberName>Jade Soucy</MemberName>
              </Member>
              <Member>
                <i className="fa fa-user" />
                <MemberName>Sébastien Rochon</MemberName>
              </Member>
            </Members>
            <Divider />
            <PoolPannelFooter>
              <div>
                <span>Edit</span>
                <FooterIcon className="fa fa-pencil" />
                <span>Delete</span>
                <FooterIcon className="fa fa-trash" />
              </div>
              <div>
                <span>Open</span>
                <FooterIcon className="fa fa-arrow-right" />
              </div>
            </PoolPannelFooter>
          </PoolPannel>
        </PoolsPresentation>
      </div>
    );
  }
}

export default PoolsView;
