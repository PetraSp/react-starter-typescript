import React from 'react';

import DataTable from '../DataTable';
import { StyledDashboardContainer } from './styles';

export interface DashboardProps {
    title: string;
}

class Dashboard extends React.Component<DashboardProps> {
    render() {
        const { title } = this.props;
        return (
            <StyledDashboardContainer>
                <h1>{title}</h1>
                <DataTable />
            </StyledDashboardContainer>
        );
    }
}

export default Dashboard;
