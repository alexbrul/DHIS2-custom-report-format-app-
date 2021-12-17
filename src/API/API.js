export const datasetReportCustomDynamicQuery = {
    dataSetReport: {
        resource: 'dataSetReport/custom',
        params: ({ ds, pe, ou }) => ({
            ds: ds,
            pe: pe,
            ou: ou,
            format: 'html'
        })
    }
}

export const dataQuery = {
    me: {
        resource: 'me',
    }
}