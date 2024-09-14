export type Integration = {
  type: string; // Identifier for this integration
  created_at?: string; // Date that this integration was supported (YYYY-MM-DD)
  updated_at?: string; // YYYY-MM-DD
  name: string; // The integration's name
  is_active?: boolean; // Is this integration active in this workspace
  categories: (
    | "passthrough"
    | "hris"
    | "ats"
    | "auth"
    | "crm"
    | "enrich"
    | "martech"
    | "ticketing"
    | "uc"
    | "accounting"
    | "storage"
    | "commerce"
    | "payment"
    | "genai"
    | "messaging"
    | "kms"
    | "task"
  )[]; // The categories of support solutions that this integration has
  api_docs_url?: string; // The URL of the integration's API documentation
  logo_url?: string; // The URL of the integration's logo
  in_progress?: boolean; // If this integration is not yet available as it is currently being built by unified.to
  color?: string; // button background color for AUTH
  text_color?: string; // text color for AUTH
  fa_icon?: string; // font-awesome icon
  token_names?: string[]; // if auth_types = 'token'
  token_instructions?: string[]; // instructions for the user on how to find the token/key
  web_url?: string; // URL for the software vendor
  rate_limit_description?: string;
  beta?: boolean; // This integration is new and is still considered "beta"
  tested_at?: string; // ISO date
  active_healthy_connections?: number;

  description?: string;
  featured?: boolean;
  popularity?: number;
  support?: {
    methods?: any;
    inbound_fields?: any;
    outbound_fields?: any;
    webhook_events?: any;
    raw_objects?: any; // objects that we map from in the integration
    from_webhook?: "supported-required" | "supported" | "not-supported";
    list_sort_by_name?: "supported-required" | "supported" | "not-supported";
    list_sort_by_created_at?:
      | "supported-required"
      | "supported"
      | "not-supported";
    list_sort_by_updated_at?:
      | "supported-required"
      | "supported"
      | "not-supported";
    list_updated_gte?: "supported-required" | "supported" | "not-supported";
    list_user_id?: "supported-required" | "supported" | "not-supported";
    list_customer_id?: "supported-required" | "supported" | "not-supported";
    list_company_id?: "supported-required" | "supported" | "not-supported";
    list_contact_id?: "supported-required" | "supported" | "not-supported";
    list_application_id?: "supported-required" | "supported" | "not-supported";
    list_candidate_id?: "supported-required" | "supported" | "not-supported";
    list_deal_id?: "supported-required" | "supported" | "not-supported";
    list_job_id?: "supported-required" | "supported" | "not-supported";
    list_invoice_id?: "supported-required" | "supported" | "not-supported";
    list_order?: "supported-required" | "supported" | "not-supported";
    list_query?: "supported-required" | "supported" | "not-supported";
    list_limit?: "supported-required" | "supported" | "not-supported";
    list_offset?: "supported-required" | "supported" | "not-supported";
    search_twitter?: "supported-required" | "supported" | "not-supported";
    search_name?: "supported-required" | "supported" | "not-supported";
    search_linkedinurl?: "supported-required" | "supported" | "not-supported";
    search_email?: "supported-required" | "supported" | "not-supported";
    search_domain?: "supported-required" | "supported" | "not-supported";
    list_parent_id?: "supported-required" | "supported" | "not-supported";
    list_account_id?: "supported-required" | "supported" | "not-supported";
    list_interview_id?: "supported-required" | "supported" | "not-supported";
    list_list_id?: "supported-required" | "supported" | "not-supported";
    list_ticket_id?: "supported-required" | "supported" | "not-supported";
    list_collection_id?: "supported-required" | "supported" | "not-supported";
    list_location_id?: "supported-required" | "supported" | "not-supported";
    list_item_id?: "supported-required" | "supported" | "not-supported";
    list_type?: "supported-required" | "supported" | "not-supported";
    list_space_id?: "supported-required" | "supported" | "not-supported";
    list_channel_id?: "supported-required" | "supported" | "not-supported";
    list_link_id?: "supported-required" | "supported" | "not-supported";
    list_project_id?: "supported-required" | "supported" | "not-supported";
    list_item_variant_id?: "supported-required" | "supported" | "not-supported";
    list_raw_fields?: "supported-required" | "supported" | "not-supported";
  };
};
