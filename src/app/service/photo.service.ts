import {Injectable} from '@angular/core'
import {createClient, SupabaseClient} from '@supabase/supabase-js'
import {from, map, Observable} from 'rxjs'
import {Photo} from '../model/photo.model'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private supabaseClient: SupabaseClient

  constructor() {
    const {supabaseUrl, supabaseKey} = environment
    this.supabaseClient = createClient(supabaseUrl, supabaseKey)
  }

  getPhotos(): Observable<Photo[]> {
    return from(
      this.supabaseClient
        .from('photo')
        .select('*')
        .order('created_at', {ascending: false})
    )
      .pipe(
        map(r => r.data!)
      )
  }

}
