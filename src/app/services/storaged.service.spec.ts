import { Repository } from './../models/repository';
import { StoragedService } from './storaged.service';

describe('StoragedService', () => {
  let storagedService: StoragedService;

  const mockRepository: Repository[] = [
    {
      description: 'description',
      forks_count: 123,
      full_name: 'repo name',
      open_issues_count: 89,
      owner: {
        avatar_url: 'myurl',
        login: 'myLogin',
      },
      stargazers_count: 2,
    },
  ];

  beforeEach(() => {
    storagedService = new StoragedService();
  });

  afterEach(() => {
    window.localStorage.clear();
  });

  it('should be instanced', () => {
    expect(storagedService).toBeTruthy();
  });

  it('should save data', () => {
    expect(storagedService.saveData('item', mockRepository)).toBe();
  });

  it('should receive the data', () => {
    window.localStorage.setItem('item', JSON.stringify(mockRepository));

    expect(storagedService.getData('item')).toBeTruthy();
  });
});
