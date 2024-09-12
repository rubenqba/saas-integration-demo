export type PipedriveContact = {
  id: number;
  active_flag: boolean;
  owner_id: number;
  org_id: number;
  name: string;
  update_time: string;
  delete_time: string;
  add_time: string;
  visible_to: string;
  picture_id: number;
  label: number;
  cc_email: string;
  _nango_metadata: {
    deleted_at: string | null;
    last_action: "ADDED" | "UPDATED" | "DELETED";
    first_seen_at: string;
    cursor: string;
    last_modified_at: string;
  };
};
