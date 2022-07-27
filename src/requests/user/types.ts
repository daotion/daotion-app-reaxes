export namespace User_account_update {
  export type payload = {
    address: string;
    data: {
      displayName?: string;
      bio?: string;
      customUrl?: string;
      setAddress?: string;
      timestamp?: number;
    };
    signature: string;
  };
}

export namespace User_upload_profile {
  export type payload = {
    address: string;
    data: {
      address: string;
      profileType: number;
      timestamp: number;
      socialLinks: string;
    }
    // todo 要改掉
    signature: any;
    file: File;
  }
}
