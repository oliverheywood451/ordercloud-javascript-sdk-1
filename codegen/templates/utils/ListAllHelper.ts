import { ListPage } from '../models/ListPage';

/**
 * @ignore
 * not part of public api, don't include in generated docs
 */
class ListAllHelper {
    private MAX_PAGE_SIZE = 100;
    // Only relevant to the concurrent paging technique
    private MAX_NUM_PARALLEL_REQUESTS = 16;
    // For record sizes above 30 pages, use last ID filter paging. Below 30 pages, use the page parameter concurrently. 
    private PAGE_THRESHOLD_FOR_PAGING_TECHNIQUE = 30;

    constructor() {
        this.ListAll = this.ListAll.bind(this);
    }

    public ListAll<T>(listFunc: (page: number, filterKey: string, filterValue: string) => ListPage<T>): Promise<T[]> {
        var page1 = await listFunc()

    }
}
  
export default new ListAllHelper();