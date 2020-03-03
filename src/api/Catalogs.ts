import { ListPage } from '../models/ListPage';
import { Catalog } from '../models/Catalog';
import { CatalogAssignment } from '../models/CatalogAssignment';
import { ProductCatalogAssignment } from '../models/ProductCatalogAssignment';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class Catalogs {
    private impersonating:boolean = false;

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TCatalog extends Catalog>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TCatalog>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCatalog>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param catalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TCatalog extends Catalog>(catalog: Catalog, accessToken?: string ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs`, { data: catalog, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TCatalog extends Catalog>(catalogID: string,  accessToken?: string ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param catalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TCatalog extends Catalog>(catalogID: string, catalog: Catalog, accessToken?: string ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/catalogs/${catalogID}`, { data: catalog, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(catalogID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param catalog 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TCatalog extends Catalog>(catalogID: string, catalog: PartialDeep<Catalog>,  accessToken?: string ): Promise<RequiredDeep<TCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/catalogs/${catalogID}`, { data: catalog, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.buyerID ID of the buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment(catalogID: string,  options: { buyerID?: string } = {}, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteProductAssignment(catalogID: string, productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/productassignments/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.buyerID ID of the buyer.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments<TCatalogAssignment extends CatalogAssignment>( options: { catalogID?: string, buyerID?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TCatalogAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogAssignment Required fields: CatalogID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment(catalogAssignment: CatalogAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/assignments`, { data: catalogAssignment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.productID ID of the product.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProductAssignments<TProductCatalogAssignment extends ProductCatalogAssignment>( options: { catalogID?: string, productID?: string, page?: number, pageSize?: number } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TProductCatalogAssignment>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/productassignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param productCatalogAssignment Required fields: CatalogID, ProductID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveProductAssignment(productCatalogAssignment: ProductCatalogAssignment, accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/productassignments`, { data: productCatalogAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Catalogs.As().List() // lists Catalogs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Catalogs();